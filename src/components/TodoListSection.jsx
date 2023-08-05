import React from 'react'
import Image from 'next/image'

const TodoListSection = () => {
	return (
		<section id="todo" className="py-12 text-center flex min-h-screen justify-center flex-col px-4 bg-gradient-to-l from-gray-800 via-gray-700 to-gray-900 text-white border-b border-white">
			<div className="container mx-auto max-w-[1000px] flex justify-center flex-col items-center">
				<h1 className='text-3xl'><i className="fa-solid fa-list-ol rounded-lg text-red-400"></i></h1>
				<h2 className="text-3xl font-bold mb-5">
					ToDo List
				</h2>
				<div className='flex flex-col gap-5 justify-center items-center'>
					<p>
						Stay organized, efficient, and focused on what matters. Let our Todo List be your digital assistant
						in managing your daily tasks and achieving your goals.
					</p>
					<Image
						className=' border border-white max-w-sm'
						width={609}
						height={348}
						src={"/Img6.png"}
						alt='Img6'
					/>
					<p>
						Completed a task? Congratulations! You can instantly delete a task with a single click or tap.
						Feel a sense of accomplishment as you tick off completed tasks from your list.
					</p>
					<div className="grid mx-5 sm:mx-0 gap-4 grid-cols-1 sm:grid-cols-2 mt-4">
						<div className="bg-gray-800 rounded-lg p-6">
							<p>
								With our app&apos;s built-in Todo List feature, you can manage and organize your tasks effectively.
								Whether it&apos;s daily chores, work assignments, or personal goals, our Todo List keeps you on track
								and focused.
							</p>
						</div>
						<div className="bg-gray-800 rounded-lg p-6">
							<p>
								The Todo List allows you to store up to ten todo items at a time. You can easily add new tasks,
								update existing ones, and mark them as completed when done. The simplicity of the Todo List ensures
								a seamless experience for all users.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TodoListSection
