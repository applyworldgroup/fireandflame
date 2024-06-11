import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import Wrapper from "@/components/core/Wrapper";
import { Footer } from "@/components/footer/Footer";
import { Landing } from "@/components/landing/Landing";
import { Navbar } from "@/components/navbar/Navbar";
import { Focus } from "@/components/ourFocus/Focus";
import { Team } from "@/components/team/Team";

export default function Home() {
    return (
        <Wrapper>
          <div className="flex flex-col items-center gap-16 py-4">
            <Navbar />
            <Landing />
            <Focus />
            <About />
            <Team />
            <Contact />
            <div className="border-[1px] border-tertiary/10 w-full "></div>
            <Footer />
          </div>
        </Wrapper>
    );
}
