import { mount } from "@vue/test-utils";
import UserList from "../src/components/UserList.vue";
import axios from "axios";
import { vi } from "vitest";

// Helper function to wait for all pending promises to resolve
const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

vi.mock("axios");

describe("UserList.vue", () => {
  it("renders a list of users after fetching data", async () => {
    // Arrange: Prepare a fake response from the API
    const usersData = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    axios.get.mockResolvedValue({ data: usersData });

    // Act: Mount the component
    const wrapper = mount(UserList);

    // Wait for all promises (like axios.get) to resolve and component to update
    await flushPromises();

    // Assert: Check that the list items are rendered with correct user names
    const listItems = wrapper.findAll("li");
    expect(listItems).toHaveLength(usersData.length);
    expect(listItems[0].text()).toBe("Alice");
    expect(listItems[1].text()).toBe("Bob");
  });
});
