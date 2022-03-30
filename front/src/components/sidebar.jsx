import BicycleIcon from "../assets/icons/bicycle"
import SwimIcon from "../assets/icons/swim"
import WeightIcon from "../assets/icons/weight"
import YogaIcon from "../assets/icons/yoga"
import "../css/sidebar.css"

export default function Sidebar() {
  return(
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <li><YogaIcon /></li>
        <li><SwimIcon /></li>
        <li><BicycleIcon /></li>
        <li><WeightIcon /></li>
      </ul>
      <p className="sidebar__copyright">(c) SportSee - 2022</p>
    </aside>
  )
}
