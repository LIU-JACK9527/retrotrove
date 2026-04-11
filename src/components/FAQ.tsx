'use client';

import { useState } from 'react';

export default function FAQ() {
  // FAQ 数据
  const faqs = [
    {
      id: 1,
      question: 'Do I need to download anything to play?',
      answer: 'No, all games run directly in your browser. There are no downloads or installations required.'
    },
    {
      id: 2,
      question: 'Is it free to play?',
      answer: 'Yes, all games on our site are completely free to play with no hidden costs.'
    },
    {
      id: 3,
      question: 'What devices can I play on?',
      answer: 'You can play on any device with a modern web browser, including desktop computers, laptops, tablets, and smartphones.'
    },
    {
      id: 4,
      question: 'How do the controls work?',
      answer: 'Controls are displayed on-screen for mobile devices, and keyboard controls are available for desktop users. Each game has its own control scheme.'
    },
    {
      id: 5,
      question: 'Can I save my progress?',
      answer: 'Yes, many of our games support save states, allowing you to save your progress and continue playing later.'
    }
  ];

  // 状态管理
  const [openId, setOpenId] = useState<number | null>(null);

  // 切换 FAQ 展开/折叠
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-game">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about playing Age of Empires DS games on our site.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-white text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-gray-500">
                  {openId === faq.id ? '▼' : '▶'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
