import { Link } from 'react-scroll'
import './index.css'

interface FaqItemProps {
  question: string,
  answer: string
}

type FaqdataProps = {
  faqData: Array<FaqItemProps>
}

export function Faq ({ faqData }: FaqdataProps) {
  return (
    <div className='tlbx-content'>
      <div className='grid'>
        {/* Header */}
        <ul className='link-list epfl-faq-header'>
          {faqData.map((faq, i) =>
            <li className='faq-title'>
              <Link
                to={`faq-item-${i}`}
                spy smooth={false}
              >
                <a>
                  {faq.question}
                </a>
              </Link>
            </li>
          )}
        </ul>
        {/* Q / A */}
        {faqData.map((faq, i) =>
          <div className='faq-item' id={`faq-item-${i}`}>
            <h4 className='faq-item-question'>{faq.question}</h4>
            {faq.answer}
          </div>
        )}
      </div>
    </div>
  )
}