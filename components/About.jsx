
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Accordion from "./Accordion";
import { EDUCATION, EXPERINCE } from "@/public/data";
import LanguagesProgress from "./LanguagesProgress";


const About = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28'>
            {/* title */}
            <div className="pb-10 text-center xl:text-start font-bold">
                <span className="text-primary uppercase">Meet Parker</span>
                <h3 className='h3 font-extrabold'>About me</h3>
            </div>
            {/* container */}
            <div className='flex flex-col xl:flex-row gap-16'>
                {/* left */}
                <div className='hidden xl:flexCenter flex-1 relative'>
                    <h3 className="h3">UI/UX <span className="text-secondary">Designer</span>  & Web Developer.</h3>
                    <p className="hidden sm:block text-center lg:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, voluptatem tempora iure aut velit vero quisquam totam suscipit, necessitatibus inventore, iusto possimus.</p>
                </div>
            </div>
            {/* right */}
            <div className="flex-1 mx-auto xl:mx-0">
                <Tabs defaultValue="intro">
                    <TabsList className='w-full grid grid-cols-3 max-w-[511px] border dark:border-secondary mx-auto xl:mx-0'>
                        <TabsTrigger value='intro'>Introduction</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                    </TabsList>
                    {/* tabs content */}
                    <div className="pt-12 xl:pt-3 pl-3">
                        {/* introduction */}
                        <TabsContent value='intro'>
                            <h4 className="bold-20 uppercase pb-1">Hola! My Name Is James Parker!</h4>
                            <p className="max-w-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, dolor autem id et consequuntur possimus iure vero deleniti quo ab eius explicabo.</p>
                            {/* accordion */}
                            <Accordion sliceCount={(0, 3)} />
                        </TabsContent>
                        {/* education */}
                        <TabsContent value='education'>
                            <div className="flex flex-col gap-4">
                                <h4 className="bold-20 uppercase">My Education & Experience</h4>
                                {EDUCATION.map((item, i) => (
                                    <div key={i} className="flex gap-4 medium-15">
                                        <div>{item.title}</div>
                                        -
                                        <div>{item.year}</div>
                                    </div>
                                ))}
                            </div>
                            <hr className="my-4 w-10/12" />
                            <div className="flex flex-col gap-4 mt-1.5">
                                {EXPERINCE.map((item, i) => (
                                    <div key={i} className="flex gap-4 medium-15">
                                        <div>{item.title}</div>
                                        -
                                        <div>{item.year}</div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills'>
                            <div className="flex flex-col gap-4">
                                <LanguagesProgress />
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
        </section >
    )
}

export default About