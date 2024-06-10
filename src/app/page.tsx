// {
//   "new Function Component": {
//     "prefix": "fc", // ⬅ String to be entered into the editor for snippet call
//     "body": [ //⬅ The string to be inserted. To enter multiple lines, write an array.
//     "import { FC } from 'react';",
//     "", 
//     "interface ${1:$TM_FILENAME_BASE}Props {};",
//     "", 
//     "const ${1:$TM_FILENAME_BASE}: FC<${1:$TM_FILENAME_BASE}Props> = ({}) => {",
//     "  return <div> $2 </div>;",
//     "};",
//     "", 
//     "export default ${1:$TM_FILENAME_BASE};"
//     ],
//     "description": "Template of new FC",
//   }
//   }



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
          <div className="flex flex-col items-center gap-16">
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