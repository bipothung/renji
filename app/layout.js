import AudioPlayer from "@/components/AudioPlayer";
import "./globals.css";

export const metadata = {
  title: "RenjiPhotography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/renjilogo.png" type="image/png" />
        <title>{metadata.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Amita:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allan:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Podkova:wght@800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AudioPlayer /> {/* Include the AudioPlayer component */}
        {children}
      </body>
    </html>
  );
}
