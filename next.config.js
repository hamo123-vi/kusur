/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL : 'https://dev-api.kusur.ba/api/v1/loyalty/dashboard?dateModel.dateFrom=2020-01-01%2000:00:00&amp;dateModel.dateTo=2022-12-31%2023:59:59&amp;filterModels[0].filterDescriptor=branchId&amp;filterModels[0].filterValue=15&amp;filterModels[1].filterDescriptor=type&amp;filterModels[1].filterValue=KpiCollectedVsSpentPoints',
    TOKEN : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpbmZvQHBsYW5ldG9idWNhLmNvbSIsImp0aSI6IjQ5YTQ2NDI1LTRmNmItNDVlOC1hMTA1LWQ3Y2M3ZjU1ZjhiNSIsImVtYWlsIjoiaW5mb0BwbGFuZXRvYnVjYS5jb20iLCJpZCI6ImZiY2M2MjExLWQxOWQtNDg5NC1iNWRiLWZmMmY5ZjBjNTk3YSIsImJyYW5jaElkIjoiMCIsImFwcGxpY2F0aW9uSWQiOiJlNDAzMjlhOS0xNjcwLTQyNWQtYTYwNC00ZTExNWY5MTU0YzYiLCJzZXNzaW9uSWQiOiI0OGQyNzY4MS01NjM2LTQ3MDktOGJjZC04Y2E3NWExMWYwNzYiLCJhdWQiOiJVc2VyIiwibmJmIjoxNjYwMjE2MjUwLCJleHAiOjQ3ODQzNTM4NTAsImlhdCI6MTY2MDIxNjI1MH0.Azj2wGfUa0TaAawmBCF2faqVEvnS-YAEazazrFbMOO8'
  }
}

module.exports = nextConfig
