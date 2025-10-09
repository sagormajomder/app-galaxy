import { useRouteError } from "react-router";
import noAppErroImage from "../assets/App-Error.png";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import LinkButton from "./../components/LinkButton";

export default function NoAppError() {
  const error = useRouteError();
  return (
    <section className="py-14">
      <Container style="flex flex-col items-center gap-14">
        <figure className="overflow-hidden">
          <img src={noAppErroImage} alt="No App Found" />
        </figure>
        <SectionTitle
          title={error.message}
          desc="The App you are requesting is not found on our system.  please try another apps"
        />

        <LinkButton to="/" styles="bg-gradient-primary text-white -mt-10">
          &larr; Go Back!
        </LinkButton>
      </Container>
    </section>
  );
}
