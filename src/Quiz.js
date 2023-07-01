import React from "react";
import QuizCard from "./components/QuizCard";

const Quiz = () => {
	const question = "What is the capital of France?";
	const imageUrl = "https://via.placeholder.com/300";
	const options = ["London", "Paris", "Berlin", "Madrid"];

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<QuizCard question={question} imageUrl={imageUrl} options={options} />
		</div>
	);
};

export default Quiz;
