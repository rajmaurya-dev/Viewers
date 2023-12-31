'use client'
import { FormInputList } from '@/types'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
interface FormListProps {
    submit: SubmitHandler<FormInputList>
}
const FormList: FC<FormListProps> = ({ submit }) => {
    const { register, handleSubmit } = useForm<FormInputList>()

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center items-center gap-5 mt-5'>
            <input {...register('title', { required: true })} type="text" placeholder="Top psychological thriller" className="input input-bordered w-full max-w-lg" />

            <textarea {...register('description', { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-sm w-full max-w-lg " ></textarea>
            <div className="flex items-center">
                <label className="label">
                    <span className="label-text">Public</span>
                </label>
                <input {...register('isPublic')} type="radio" value="true" className="radio radio-primary" />
                <label className="label">
                    <span className="label-text">Private</span>
                </label>
                <input {...register('isPublic')} type="radio" value="" className="radio radio-primary" />
            </div>


            <select {...register('category', { required: true })} className="select select-error w-full max-w-lg">
                <option disabled value=''>Select category</option>
                <option>Movie</option>
                <option>Anime</option>
                <option>TVSeries</option>

            </select>
            <button className='btn w-full max-w-lg'>Create List</button>
        </form>
    )
}

export default FormList