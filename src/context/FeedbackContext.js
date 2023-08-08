import { v4 as uuidv4 } from "uuid"
import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item 1 is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This item 2 is from context",
      rating: 9,
    },
    {
      id: 3,
      text: "This item 3 is from context",
      rating: 8,
    },
  ])
  
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm("Miaow delete sure?")){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }
  
  // tags an item for edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext