export const createDateString = (createdDate) => {
   const date = new Date(createdDate)
   let month = date.toLocaleString('en-US', { month: 'long' })
   month = month.slice(0, 3).toLowerCase()

   let day = date.getDate()
   day = day < 10 ? `0${day}` : day

   return `${day} ${month}`
}