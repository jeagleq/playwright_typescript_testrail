current_date=$(date + "%a, %d %b %Y %H:%M")
[[ -f "./.env"]] && source ./.env

trcli -y \
  -h https://INSERT-INSTANCE-NAME.testrail.io \
  --project "My Project" \
  --username "$TESTRAIL_EMAIL" \
  --password "$TESTRAIL_PASSWORD" \
  parse_junit \
  --case-matcher "name" \
  --title "Automated Test Run $current_date" \
  -f "./test-results/junit-report.xml"