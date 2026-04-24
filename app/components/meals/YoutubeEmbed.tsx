type YoutubeEmbedProps = {
  url: string | null;
};

function getYoutubeId(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    return parsedUrl.searchParams.get("v");
  } catch {
    return null;
  }
}

export function YoutubeEmbed({ url }: YoutubeEmbedProps) {
  if (!url) {
    return null;
  }

  const videoId = getYoutubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-stone-950">Video Tutorial</h2>
      <div className="mt-5 aspect-video overflow-hidden rounded-lg bg-stone-100">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Meal tutorial video"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
