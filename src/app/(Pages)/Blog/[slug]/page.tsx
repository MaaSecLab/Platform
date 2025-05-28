import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { getArticleData, getArticleSlugs } from "../../../../../lib/blogs";
import Footer from "app/components/Footer";




const Blog = async ({params}: { params: Promise<{slug: string}> }) => {
    //const params = await props.params;
    const {slug} = await params;
    const articleData = await getArticleData(slug)

    return (
        <div>
            <section className="mx-auto w-10/12 mt-20 flex flex-col gap-5">
                <div className="flex justify-between ">
                    <Link href="/Blog">
                        <ArrowLeftIcon width={20} />
                        <p>Blogs</p>
                    </Link>
                    <p>{articleData.date.toString()}</p>
                </div>
                <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
            </section>
            <Footer />
        </div>
    )
}

export default Blog;

export async function generateStaticParams(){
    const slugs = await getArticleSlugs();
    return slugs.map((slug: string) => ({slug}));
}