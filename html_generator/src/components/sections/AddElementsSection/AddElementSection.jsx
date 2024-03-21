import { useContext } from "react"
import { ComponentContext } from "../../../context/componentContext"
import ButtonComponent from "../../shared/ButtonComponent/ButtonComponent"

const AddElementSection = () => {
    const ElementsList = useContext(ComponentContext)



  return (
      <div className="flex flex-col h-96 overflow-auto">
        {ElementsList.components.map((element, index) => (
            <ButtonComponent key={index} name={element.name} icon={element.icon} />
        ))}
    </div>
  )
}

export default AddElementSection