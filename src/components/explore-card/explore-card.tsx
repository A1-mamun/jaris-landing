"use client"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import ArrowRight from "./arrow-right";
import { useRouter } from "next/navigation";

const ExploreCard = ({
	title,
	description,
	link,
}: {
	title: string;
	description: string;
	link: string;
}) => {
	const router = useRouter();

	return (
		<Card
			radius="sm"
			shadow="md"
			className="bg-jaris-yellow md:px-6 md:py-8 w-[90%] md:w-[400px] md:h-[270px] lg:h-[280px]"
			isPressable
			onPress={() => router.push(`${link}`)}
		>
			<CardHeader className="h-10">
				<h3 className="text-xl md:text-2xl font-bold text-jaris-blue">
					{title}
				</h3>
			</CardHeader>
			<CardBody>
				<p className="text-base md:text-lg text-white font-semibold">
					{description}
				</p>
			</CardBody>
			<CardFooter>
				<ArrowRight />
			</CardFooter>
		</Card>
	);
};

export default ExploreCard;
