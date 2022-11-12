import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/newsSummaryCard/NewsSummeryCard";

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>

            <h2>News Portal Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;