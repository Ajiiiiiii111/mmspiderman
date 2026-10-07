import "./footer.css";

const footerLinks = [
	["About", "#about"],
	["Powers", "#powers"],
	["Suits", "#suits"],
	["Gallery", "#gallery"],
	["Contact", "#contact"],
];

const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-brand">
					<a href="#home">MILES MORALES</a>
					<p>One hero. Infinite possibilities.</p>
				</div>

				<nav className="footer-links" aria-label="Footer navigation">
					{footerLinks.map(([label, href]) => (
						<a href={href} key={label}>
							{label}
						</a>
					))}
				</nav>

				<a className="back-to-top" href="#home" aria-label="Back to top">
					&#8593;
				</a>
			</div>

			<div className="footer-bottom">
				<span>&copy; {new Date().getFullYear()} Miles Morales Archive</span>
				<span>Built with great responsibility.</span>
			</div>
		</footer>
	);
};

export default Footer;
