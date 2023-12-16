

export const Footer = ({length}) => {
  return (
    <h1 className="text-2xl font-bold text-white bg-blue-600 text-center py-4 mt-auto">
    You have {length} {length <= 1 ? 'task' : 'tasks'}
   </h1>
  )
}
