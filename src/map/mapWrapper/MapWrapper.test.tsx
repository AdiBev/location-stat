import { render, screen } from "@testing-library/react"
import { it, describe, expect } from "vitest"
import { MapWrapper } from "./MapWrapper"

describe("MapWrapper", () => {
  it("should render it's children", () => {
    render(
      <MapWrapper center={[0, 0]}>
        <div>Hello world</div>
      </MapWrapper>
    )
    expect(screen.getByText("Hello world")).toBeInTheDocument()
  })
})
