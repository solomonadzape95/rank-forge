import { useState } from 'react'
import {
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

const faqs = [
  {
    head: 'Can I use the service for business transactions?',
    body: 'Yes, our platform supports both personal and business transactions. Businesses can benefit from our secure and efficient transfer options tailored to their needs.',
  },
  {
    head: 'What is the maximum amount I can transfer?',
    body: 'The maximum amount you can transfer depends on your account type and verification level. Please refer to our terms and conditions for detailed information.',
  },
  {
    head: 'How do I update my account information?',
    body: 'You can update your account information by logging into your account and navigating to the settings section. From there, you can edit your personal details.',
  },
  {
    head: 'Are there any benefits for frequent users?',
    body: 'Yes, we offer various loyalty programs and discounts for frequent users. Please check our website for more details.',
  },
  {
    head: 'Can I access my account from multiple devices?',
    body: 'Yes, you can access your account from multiple devices. Just ensure you log in with the same credentials.',
  },
]
export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const handleToggle = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index))
  }
  return (
    <div className="w-10/12 mx-auto mb-20">
      <section className="flex flex-col items-start justify-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-left mb-6">
          Frequently Asked Questions
        </h2>
      </section>
      <div className="flex flex-col gap-5 h-full w-full">
        {faqs.map((faq, index) => (
          <span
            className={`bg-[#18181b] px-4 rounded-xl border-t-[2px] border-[#1717171F] flex justify-between py-3 md:py-5 w-full cursor-pointer relative overflow-hidden border-collapse transition-all duration-300 ${
              openItem === index ? 'h-[170px]' : 'md:h-[80px] xl:h-[70px]'
            } ${index === faqs.length - 1 ? 'border-b-[2px]' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span className="text-left w-11/12 space-y-3">
              <h3 className="font-semibold text-[16px] md:text-[18px] xl:text-[24px] ">
                {faq.head}
              </h3>
              {openItem === index ? (
                <p className="text-[16px]">{faq.body}</p>
              ) : (
                ''
              )}
            </span>
            <span className=" self-start flex items-center absolute right-5 top-2 md:top-4">
              <PlusCircleIcon
                className={`${openItem === index ? 'rotate-45 text-gray-400' : 'text-[#7F4A8E] '}  transition-all duration-300 w-8 h-8 md:w-10 md:h-10`}
              />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
