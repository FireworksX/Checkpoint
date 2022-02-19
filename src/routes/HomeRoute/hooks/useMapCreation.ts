import { useState } from 'react'

export const useMapCreation = () => {
  const [isCreation, setIsCreation] = useState(false)

  const onToggleIsCreation = () => setIsCreation(val => !val)

  return {
    isCreation,
    onToggleIsCreation
  }
}
