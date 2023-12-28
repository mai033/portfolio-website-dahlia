// 'use client';

// import React from 'react';
// import SectionHeading from './section-heading';
// import { motion } from 'framer-motion';
// import { useSectionInView } from '@/lib/hooks';
// import { sendEmail } from '@/actions/sendEmail';
// import SubmitBtn from './submit-btn';
// import toast from 'react-hot-toast';

// export default function Contact() {
//   const { ref } = useSectionInView('Contact', 0.3);

//   return (
//     <motion.section
//       ref={ref}
//       id="contact"
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact</SectionHeading>
//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Feel free to get in touch with me directly at{' '}
//         <a className="underline" href="mailto:dahliamai033@gmail.com">
//           dahliamai033@gmail.com
//         </a>{' '}
//         or simply drop me a message using this form. I'm always happy to
//         connect!
//       </p>

//       <form
//         className="mt-10 flex flex-col dark:text-black-"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData);
//           if (error) {
//             toast.error(error);
//             return;
//           }
//           toast.success('Email sent successfully!');
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:text-black transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:text-black transition-all dark:outline-none"
//           name="message"
//           placeholder="Message"
//           required
//           maxLength={5000}
//         />
//         <SubmitBtn />
//       </form>
//     </motion.section>
//   );
// }

'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.3);
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      senderEmail,
      message,
    };
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success('Email sent successfully!');

    // Clear the input fields
    setSenderEmail('');
    setMessage('');
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to get in touch with me directly at{' '}
        <a className="underline" href="mailto:dahliamai033@gmail.com">
          dahliamai033@gmail.com
        </a>{' '}
        or simply drop me a message using this form. I'm always happy to
        connect!
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black-"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:text-black transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:text-black transition-all dark:outline-none"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
