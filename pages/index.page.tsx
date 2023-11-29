import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from './style.module.scss';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraph';
import Text from 'components/commons/Typography/Text';
import data from 'data/data.json';
import { Quiz } from 'types/quiz';
import QuizList from 'components/QuizList';
import Header from 'components/commons/Header';

interface IProps {
    quizzes: Quiz[];
}

const Home = ({ quizzes }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container className={styles.container}>
                    <div>
                        <Title className={styles.title}
                               level={1}
                               size={'large'}
                        >
                            <Text type={'secondary'}
                                  weight={'300'}
                            >
                                {`Welcome to the `}
                            </Text>
                            Frontend Quiz!
                        </Title>
                        <Paragraph className={styles.description}
                                   size={'small'}
                        >
                            <Text>
                                Pick a subject to get started.
                            </Text>
                        </Paragraph>
                    </div>

                    <QuizList quizzes={quizzes} />
                </Container>
            </main>
        </>
    );
}

export const getStaticProps = (async () => {
    const quizzes: Quiz[] = data.quizzes as Quiz[];
    return {
        props: {
            quizzes,
        },
    };
}) satisfies GetStaticProps<IProps>;

export default Home
