import { supabase } from '../utils/supabase'

const LessongDetails = ({ lesson }) => {
    return (
        <div className='w-full max-w-3xl px-8 py-16 mx-auto'>
            <h1 className='mb-6 text-3xl'>{lesson.title}</h1>
            <p>{lesson.description}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    const { data: lessons } = await supabase.from('lesson').select('id')

    const paths = lessons.map(({ id }) => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { id } }) => {
    const { data: lesson } = await supabase.from('lesson').select('*').eq('id', id).single()

    return {
        props: {
            lesson
        }
    }
}

export default LessongDetails;