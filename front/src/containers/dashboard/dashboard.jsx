import { useParams } from "react-router-dom"
import UserApi from "./userApi"
import { UI } from "./dashboardUI"

export default function DashboardUI() {
  let params = useParams()
  const api = new UserApi(params.userId)
  
  return(
    <UI api={api} />
  )
}
