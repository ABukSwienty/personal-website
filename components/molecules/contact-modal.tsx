import Portal from "../../HOC/portal";
import { motion, Variants } from "framer-motion";
import Button from "../atoms/button";
import Title from "../atoms/title";
import IconMini from "../atoms/icon/icon-mini";
import Input from "./input";
import TextArea from "./text-area";
import toast from "react-hot-toast";
import * as yup from "yup";
import useYup from "../../hooks/use-yup";
import { useState } from "react";
import copyToClipboard from "../../util/copy-to-clipboard";
import useEmailJs from "../../hooks/use-email-js";
import { EnvProps } from "../../pages";

const CONTACT_FORM_SCHEMA = yup.object().shape({
  subject: yup.string().required("Subject is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

export interface ContactModalProps {
  onClose: () => void;
  env: EnvProps;
}

const wrapperVariants: Variants = {
  initial: {
    backgroundColor: "rgb(79 70 229 / 0.0)",
  },
  animate: {
    backgroundColor: "rgb(79 70 229/ 0.7)",
  },
  exit: {
    backgroundColor: "rgb(220 220 220 / 0.0)",
    transition: {
      staggerDirection: -1,
    },
  },
};

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.85,
    opacity: 0,
    y: 100,
    transition: {
      type: "linear",
    },
  },
};

const ContactModal = ({ onClose, env }: ContactModalProps) => {
  const { validate, errors, resetErrors } = useYup(CONTACT_FORM_SCHEMA);
  const [values, setValues] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const { send } = useEmailJs();

  /* const fakeSend = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(undefined);
        onClose();
      }, 2000)
    );
  }; */

  const emailSender = async () => {
    await send(values, env);
    onClose();
  };

  const handleSend = async () => {
    resetErrors();
    const isValid = await validate(values);

    if (!isValid) return;

    toast.promise(emailSender(), {
      loading: "Sending...",
      success: "Email sent!",
      error: "Whoops, something went wrong! I may have run out of free emails.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCopyEmail = () => {
    copyToClipboard("alexanderbukswienty@gmail.com", "Email copied!");
    onClose();
  };

  return (
    <Portal>
      <motion.div
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed z-50 flex h-screen w-screen items-center justify-center"
      >
        <motion.div
          variants={modalVariants}
          className="md:2/3 fixed flex h-fit max-h-[80%] w-3/4 flex-col overflow-scroll rounded-lg bg-white px-6 pt-4 pb-8 shadow-md dark:bg-gray-700 dark:text-gray-50 lg:w-1/2 xl:w-1/3"
        >
          <div className="w-full">
            <Button
              onClick={onClose}
              icon="close"
              color="light"
              size="xs"
              className="ml-auto"
            />
          </div>
          <div className="grow space-y-8">
            <div className="border-b pt-4 pb-6">
              <Title size="xl">Shoot me an email</Title>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-50">
                Or if you prefer to do it your way, you can get in touch here:
              </p>
              <div className="mt-2 flex w-full flex-row items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-600">
                <p className="p-2 pl-4 font-mono text-sm dark:text-gray-50">
                  alexanderbukswienty@gmail.com
                </p>
                <IconMini
                  icon="copy"
                  className="mr-2 cursor-pointer text-gray-400"
                  onClick={handleCopyEmail}
                />
              </div>
            </div>
            <Input
              name="subject"
              placeholder="Let's collaborate!"
              label="Subject"
              leadingIcon="emailSubject"
              error={errors?.subject}
              value={values.subject}
              onChange={handleChange}
            />
            <Input
              name="email"
              label="Your email"
              placeholder="Jane@Doe.com"
              leadingIcon="email"
              error={errors?.email}
              value={values.email}
              onChange={handleChange}
            />
            <TextArea
              name="message"
              label="Message"
              error={errors?.message}
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className="mt-8 flex w-full flex-row justify-end space-x-4">
            <Button onClick={onClose} trailingIcon="close" color="light">
              I regret my choices
            </Button>
            <Button onClick={handleSend} trailingIcon="send">
              Send
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
};

export default ContactModal;
