import emailjs from "@emailjs/browser";
import { EnvProps } from "../pages";

export type EmailJsEmail = {
  subject: string;
  message: string;
  email: string;
};

const useEmailJs = (delay: number = 1000) => {
  const send = async (email: EmailJsEmail, { env }: EnvProps) => {
    if (
      !env.emailJs.publicKey ||
      !env.emailJs.serviceId ||
      !env.emailJs.templateId
    )
      return;
    const response = await emailjs.send(
      env.emailJs.serviceId,
      env.emailJs.templateId,
      email,
      env.emailJs.publicKey
    );

    await new Promise((resolve) => setTimeout(resolve, delay));

    if (response.status === 200) return true;
    return false;
  };

  return {
    send,
  };
};

export default useEmailJs;
