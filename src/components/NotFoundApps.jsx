import LinkButton from "./LinkButton";

export default function NotFoundApps({ message, buttonText }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-heading text-4xl font-bold">{message}</p>
      <LinkButton
        styles="bg-gradient-primary text-center text-white max-w-fit mx-auto"
        to="/apps"
      >
        {buttonText}
      </LinkButton>
    </div>
  );
}
