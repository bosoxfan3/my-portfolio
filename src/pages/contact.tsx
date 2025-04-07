const Contact = () => (
    <div className="content text-center flex justify-center items-center">
        <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-zinc-600 mb-6">
                I'm always open to talking about projects, collaboration, or
                just chatting tech.
            </p>
            <div className="flex justify-center gap-6 text-lg pb-6 font-bold underline">
                <a
                    href="mailto:dgacquesta@gmail.com"
                    className="hover:text-blue-500 transition-colors duration-300"
                >
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/daniel-acquesta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href={`${process.env.PUBLIC_URL}/DanielAcquestaResume.pdf`}
                    download
                    className="hover:text-blue-500 transition-colors duration-300"
                >
                    Download Résumé
                </a>
            </div>
        </div>
    </div>
);

export default Contact;
