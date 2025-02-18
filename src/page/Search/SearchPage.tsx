import { Card, ConfigProvider, Empty, Flex, Pagination, Skeleton, Typography } from "antd"
import { useSearchParams} from 'react-router-dom';

import zhCN from 'antd/locale/zh_CN';
import { useEffect, useState } from "react";
import { ActivitySearch } from "../../api/activity/activity";
import { getUuid } from "../../router/token/token";
import { CardStyle, ImgStyle } from "../../utils/global/CardCss";
import { FireOutlined } from "@ant-design/icons";
interface Activity {
    uuid: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}
const GetCardId = (key: string) => {
    const url = getUuid() === null 
      ? `/home/activity?key=${key}`
      : `/home/activity?key=${key}&uuid=${getUuid()}`;
    window.open(url, '_blank');
  };
export const SearchPage=()=>{
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const pageSize = 12;
    const [searchParams] = useSearchParams();
    const searchContent = searchParams.get('content');

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const fetchActivities = async () => {
        setLoading(true);
        try {
          const response = await ActivitySearch(searchContent,currentPage, pageSize);
          if(response.list!=null){
            setActivities(response.list);
            setTotal(response.total);
          }
          
        } catch (error) {
          console.error('获取活动列表失败:', error);
        } finally {
          setLoading(false);
        }
      };
    useEffect(() => {
        fetchActivities();
        
        if (searchContent) {
            document.title = `搜索：${searchContent}`;
        }
        
        // 组件卸载时恢复标题
        return () => {
            document.title = '校园活动';
        };
    }, [currentPage, searchContent]);
    if(loading) {
        return (
            <div style={{ padding: '40px' }}>
                <Flex vertical gap="large">
                    <Skeleton.Input style={{ width: 300, height: 40 }} active size="large" />
                    <Skeleton active paragraph={{ rows: 10, width: ['100%', '100%', '100%', '100%'] }} />
                </Flex>
            </div>
        );
    }
    if(total==0){
        return (
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'  // 设置高度以确保垂直居中
            }}>
                <Empty 
                    description="搜索未找到" 
   
                />
            </div>
        )
    }
    else{
        return(
            <div style={{ 
     
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',  // 添加相对定位
             
              }}>
                <Flex vertical gap="middle" style={{ padding: '20px', flex: 1 }}>
                    <span style={{fontSize: "x-large", fontWeight: "bolder", padding: "0 25px"}}>全部活动</span>
                    <Flex gap="middle" justify={'space-around'} style={{flexWrap: 'wrap',margin:"30px 0"}}>
                    {activities.map((item) => (
                    
                        <Card hoverable style={CardStyle} styles={{body: {padding: 0, overflow: 
                        'hidden'}}} key={item.uuid} onClick={()=>{GetCardId(item.uuid)}}  >
                            <Flex justify="space-between">
                                <img
                                    alt="avatar"
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    style={ImgStyle}
                                />
                                <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                                    <Typography.Title level={5}>
                                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                        { // @ts-expect-error
                                            item.activity_title}
                                    </Typography.Title>
    
                                    <span
                                        id={"hot"}><FireOutlined/>&nbsp;{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                        { // @ts-expect-error
                                            item.popular}</span>
                                </Flex>
                            </Flex>
                        </Card>
                    ))}
                    </Flex>
                </Flex>
                <Flex 
                    justify="center" 
                    style={{ 
                    padding: '20px', 
                    borderTop: '1px solid #f0f0f0', 
                    backgroundColor: '#fff',
                    position: 'fixed',  // 固定定位
                    bottom: 0,         // 固定在底部
                    left: 0,          // 左对齐
                    right: 0,         // 右对齐
                    zIndex: 1000      // 确保在其他内容之上
                    }}
                >
                    <ConfigProvider locale={zhCN}>
                    <Pagination
                        current={currentPage}
                        total={total}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                        showQuickJumper
                        showTotal={(total) => `共 ${total} 条`}
                    />
                    </ConfigProvider>
                </Flex>
            </div>
            
        )
    }
}