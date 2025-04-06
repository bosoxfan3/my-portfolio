import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-xl mx-auto text-center py-20 px-4">
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-zinc-600 mb-8">
                I'm always open to talking about projects, collaboration, or
                just chatting tech.
            </p>
            <div className="flex justify-center gap-6 text-blue-600 text-lg font-medium">
                <a
                    href="mailto:dgacquesta@gmail.com"
                    className="hover:underline"
                >
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/daniel-acquesta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href="/DanielAcquestaResume.pdf"
                    download
                    className="hover:underline"
                >
                    Download Résumé
                </a>
            </div>
        </div>
    );
}
