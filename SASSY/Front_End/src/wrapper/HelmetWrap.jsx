import React from "react";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "../components";
import "../App.scss";

const HelmetWrap = ({ title, element }) => {
	const appender = " | SASSY";
	return (
		<>
			<Helmet>
				<title>{title + appender}</title>
			</Helmet>
			<div className="section s-wrapper">
				<Breadcrumbs />
				{element}
			</div>
			<div className="margin-divider"></div>
		</>
	);
};

export default HelmetWrap;
