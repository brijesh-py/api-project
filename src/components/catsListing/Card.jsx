const Card = () => {
  return (
    <div className="w-[360px] mx-5 bg-white rounded-lg overflow-hidden">
      <img
        className="w-full h-[200px]"
        src="https://s3-alpha-sig.figma.com/img/0424/5f1d/cd375f298914c4b144955d2ff82244ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a6PSg9ya4P~PE86jhx4jHeg88PwqosZRTT2dtn3j8Gs4ZYed2AzgYzfZGs7FZG~LECU6y~RDIdfGNxTHChnz1g~KefBGDQRR8bz07mmMjXx-E3t-k1gE2sUKlZEboqHLpEJJlfl6Q5CkzhbYqszHGcqTxbu5L1Qj~17A3H0eMztIeOq~rn7a6DJzpStLVNLon4n4RWkaZLWzxFjdy7vIGROaHEgNhRtTLMT-4FUyZ7doy4Jo7xoiXZSpYXgchJmNuHtNRlNqtLyfIndCEENou76t-F794K3wE2LGSdDb5GLBUksAYXahbYFY8tiL9QSw-ihdXdPGi32JOvveZNawPw__"
        alt=""
      />
      <div className="space-y-1 p-3">
        <h2 className="text-3xl">Kurilian</h2>
        <p className="leading-6">
          The character of the Kurilian Bobtail is independent, highly
          intelligent, clever, inquisitive, sociable, playful, trainable, absent
          of aggression and very gentle. They are devoted to their humans and
          when allowed are either on the lap of or sleeping in bed with their
          owners.
        </p>
        <div className="flex items-center space-x-6">
          <b className="block text-sm italic">Origin</b>
          <span>Russia</span>
        </div>
        <div>
          <b className="block italic text-sm">Temperament</b>
          <span className=" px-1.5 py-0.5  text-xs text-white bg-gray-400/80 rounded-lg hover:bg-pink-400 cursor-pointer">
            Highly Intelligent
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <b className="block text-sm italic">Life Span</b>
          <span>5 - 7 years</span>
        </div>
        <a href="" className="text-sky-500">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
