export const dateOfPreviousMonth = () => {
  const d = new Date()
  const prevMonth = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate())
  let month = prevMonth.getMonth() + 1
  let date = prevMonth.getDate()
  const year = prevMonth.getFullYear()
  if (date < 10) {
    date = `0${date}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  return `${year}-${month}-${date}`
}

export const limitWords = (para, limit = 17) => {
  const newPara = []
  if (para.length > limit) {
    para.split(' ').reduce((acc, curr) => {
      if (acc + curr.length <= limit) {
        newPara.push(curr)
      }
      return acc + curr.length
    }, 0)
    return `${newPara.join(' ')} ...`
  }
  return para
}
