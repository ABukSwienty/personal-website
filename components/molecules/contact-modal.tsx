import Portal from "../../HOC/portal";
import { AnimatePresence, motion, Variants } from "framer-motion";

import toast from "react-hot-toast";
import * as yup from "yup";
import useYup from "../../hooks/use-yup";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import copyToClipboard from "../../util/copy-to-clipboard";

import { GlobalContext } from "../../providers/global";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import useScrollLock from "../../hooks/use-scroll-lock";
import useOnClickOutside from "../../hooks/use-on-click-outside";

const CONTACT_FORM_SCHEMA = yup.object().shape({
  subject: yup.string().required("Subject is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

export interface ContactModalProps {}

const wrapperVariants: Variants = {
  initial: {
    backgroundColor: "rgb(31 41 55 / 0.0)",
  },
  animate: {
    backgroundColor: "rgb(31 41 55 / 0.9)",
  },
  exit: {
    backgroundColor: "rgb(31 41 55 / 0.0)",
    transition: {
      staggerDirection: -1,
    },
  },
};

const modalVariants: Variants = {
  initial: {
    y: 300,
    rotateX: 15,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 80,
      velocity: 1,
      mass: 6,
    },
  },
  exit: {
    y: 300,
    rotateX: 5,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 80,
      velocity: 1,
      mass: 6,
    },
  },
};

const emailSender = (values: any) =>
  new Promise(async (resolve, reject) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.ok) {
      resolve("Message sent");
    } else {
      reject("Message not sent");
    }
  });

const ContactModal = () => {
  const ref = useRef(null);
  const { modalStore } = useContext(GlobalContext);

  const show = useSyncExternalStore(
    modalStore.subscribe,
    () => modalStore.get().show,
    () => modalStore.get().show
  );

  const { validate, errors, resetErrors } = useYup(CONTACT_FORM_SCHEMA);
  const [values, setValues] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const { lock, unlock } = useScrollLock();

  const handleClose = () => modalStore.set({ show: false });

  useOnClickOutside(ref, handleClose);

  const handleSend = async () => {
    resetErrors();
    const isValid = await validate(values);

    if (!isValid) return;

    toast.promise(emailSender(values), {
      loading: "Sending...",
      success: () => {
        handleClose();
        return "Email sent!";
      },
      error: () => {
        handleClose();
        return "Whoops, something went wrong!";
      },
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
    handleClose();
  };

  useEffect(() => {
    if (show) lock();
    else unlock();
  }, [lock, show, unlock]);

  return (
    <AnimatePresence>
      {show && (
        <Portal>
          <motion.div
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="perspective-xl fixed z-[9999] flex h-screen w-screen items-center justify-center"
          >
            <motion.div
              ref={ref}
              variants={modalVariants}
              className="md:2/3 fixed flex h-fit max-h-[80%] w-[90%] flex-col overflow-scroll rounded-lg bg-gray-900 px-6 pt-4 pb-8 text-white shadow-md lg:w-1/2 xl:w-1/3"
            >
              <div className="grow space-y-8">
                <div className="border-b pt-4 pb-6">
                  <h2 className="text-xl">Shoot me an email</h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Or if you prefer to do it your way, you can get in touch
                    here:
                  </p>
                  <div className="mt-2 flex w-full flex-wrap items-center justify-between rounded-lg bg-gray-100 text-gray-700">
                    <p className="break-all py-2 pl-2 font-mono text-sm">
                      alexanderbukswienty@gmail.com
                    </p>
                    <button onClick={handleCopyEmail}>
                      <ClipboardIcon className="mr-2 h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Let's collaborate."
                    className="appearance-none rounded-md px-2 py-1 text-black focus:outline-none"
                    value={values.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span>{errors.subject}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="jane@doe.com"
                    className="appearance-none rounded-md px-2 py-1 text-black focus:outline-none"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={7}
                    className="appearance-none rounded-md px-2 py-1 text-black focus:outline-none"
                  ></textarea>
                  {errors.message && <span>{errors.message}</span>}
                </div>
              </div>
              <div className="mt-8 flex flex-row justify-end">
                <button className="mr-8" onClick={handleClose}>
                  Cancel
                </button>
                <button onClick={handleSend}>Send</button>
              </div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
