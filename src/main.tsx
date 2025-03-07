
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app.tsx";
// import 'virtual:svg-icons-register'//显示本地svgIcon

createRoot(document.getElementById('root')!).render(
    <App/>
)
