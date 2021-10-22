export default function FaqDataDetailed(props) {
  console.log(props)
  const {faqData} = props
  const {question, answer} = faqData
  return (
    <li>
      <h1>{question}</h1>
      <p>{answer}</p>
    </li>
  )
}
