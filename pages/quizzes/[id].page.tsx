import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Container from 'components/commons/Container';
import data from 'data/data.json';
import { Quiz } from 'types/quiz';
import Header from 'components/commons/Header';
import { IconName } from 'constants/Icons';
import QuizBoardContainer from 'containers/QuizBoardContainer';
import Layout from 'components/commons/Layout';

interface IProps {
    quiz: Quiz;
}

const QuizzePage = ({ quiz }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <Header iconName={quiz.icon as IconName}
                    title={quiz.title}
            />
            <main>
                <Container>
                    <QuizBoardContainer quiz={quiz} />
                </Container>
            </main>
        </Layout>
    );
}

export const getStaticPaths = (() => {
    const quizzes: Quiz[] = data.quizzes as Quiz[];
    const paths = quizzes.map(({ title }) => ({
        params: { id: title.toLowerCase() },
    }));

    return {
        paths,
        fallback: false,
    };
}) satisfies GetStaticPaths;

export const getStaticProps = ((context) => {
    const { id } = context.params as { id: string };
    const quizzes: Quiz[] = data.quizzes as Quiz[];
    const quiz = quizzes.find((quiz) => quiz.title.toLowerCase() === id);

    if (!quiz) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            quiz,
        },
    };
}) satisfies GetStaticProps<IProps>;

export default QuizzePage;
