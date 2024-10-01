// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Breadcrumb from "@/components/breadcrumb";
// import "@testing-library/jest-dom";

// // Mock do Link do Next.js e useRouter
// jest.mock("next/link", () => {
//   return ({ children, href }: { children: React.ReactNode; href: string }) =>
//     React.cloneElement(<a href={href}>{children}</a>);
// });

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// type breadcrump = {
//   titleName: string;
//   pageName: string;
// };

// export const testBreadcrumbRendering = ({
//   titleName,
//   pageName,
// }: breadcrump) => {
//   const title = titleName;
//   const page = pageName;

//   render(<Breadcrumb page={page} title={title} />);

//   const titleElement = screen.getByRole("heading", {
//     name: title,
//     level: 2,
//   });
//   expect(titleElement).toBeInTheDocument();

//   const spanElement = screen.getByText(page);
//   expect(spanElement).toBeInTheDocument();

//   const homeLink = screen.getByRole("link", { name: /home/i });
//   expect(homeLink).toBeInTheDocument();
//   expect(homeLink).toHaveAttribute("href", "/");

//   const pageSpan = screen.getByText(page);
//   expect(pageSpan).toBeInTheDocument();
// };
