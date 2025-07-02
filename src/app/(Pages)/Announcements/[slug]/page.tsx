import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import {
  getArticleData,
  getArticleSlugs,
} from "../../../../../lib/announcement";
import Footer from "app/components/Footer";

const Announcement = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="mx-auto w-10/12 mt-20 flex flex-col gap-5 bg-white flex-1">
        <div className="flex justify-between ">
          <Link href="/Announcements" className="text-black">
            <ArrowLeftIcon width={20} />
            <p>Announcements</p>
          </Link>
          <p className="text-black">{articleData.date}</p>
        </div>
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Announcement;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug: string) => ({ slug }));
}
