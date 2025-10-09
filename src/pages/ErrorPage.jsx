import Container from "../components/Container";
import LinkButton from "../components/LinkButton";
import SectionTitle from "../components/SectionTitle";

import noPageFoundImage from "../assets/error-404.png";

export default function ErrorPage() {
  return (
    <section className="py-14">
      <Container style="flex flex-col items-center gap-14">
        <figure className="overflow-hidden">
          <img src={noPageFoundImage} alt="No Page Found" />
        </figure>
        <SectionTitle
          title="Oops, page not found!"
          desc="The page you are looking for is not available."
        />

        <LinkButton to="/" styles="bg-gradient-primary text-white -mt-10">
          &larr; Go Back!
        </LinkButton>
      </Container>
    </section>
  );
}
