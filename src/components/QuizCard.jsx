import React from "react";

const QuizCard = ({ question, imageUrl, options }) => {
	return (
		<div class="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
			<h2 class="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4">
				{question}
			</h2>
			<div class="flex flex-col md:flex-row">
				<div class="md:w-2/3 md:pr-6">
					<img src={imageUrl} alt="Quiz" class="w-full h-auto rounded-lg" />
				</div>
				<div class="md:w-1/3">
					<ul class="mt-4">
						{options.map((option, index) => (
							<li key={index} class="flex items-center mb-2">
								<input
									type="radio"
									id={`option${index}`}
									name="quizOption"
									class="mr-2"
								/>
								<label htmlFor={`option${index}`} class="text-gray-800">
									{option}
								</label>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
