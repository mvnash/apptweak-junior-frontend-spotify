const formatDuration = (duration:number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  export default formatDuration;