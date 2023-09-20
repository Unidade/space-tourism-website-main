import dataJson from "@/public/data.json"

export default function DestinationPage() {
  return (
    <section>
      <div>
        <p className="uppercase">pick your destination</p>
      </div>
    </section>
  )
}

function getDestinationData(destination: string) {
  return dataJson.destinations.find((data) => data.name === destination)
}
