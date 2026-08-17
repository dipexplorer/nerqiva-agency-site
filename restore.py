import json

TARGET_FILES = {
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/app/page.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/SmoothScroll.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/CustomCursor.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/ScrollStory.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/NerveWorld.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/Solutions.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/Process.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/CaseStudies.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/CTA.tsx": None,
    "/mnt/data2/SIDE_HUSSLE/agency-site/src/components/Credibility.tsx": None
}

with open("/home/dipuser/.gemini/antigravity-ide/brain/2974476e-99f6-4117-895e-0cccdfd7e581/.system_generated/logs/transcript.jsonl", "r") as f:
    for line in f:
        try:
            data = json.loads(line)
            if "tool_calls" in data:
                created_at = data.get("created_at", "")
                if created_at < "2026-08-17T09:48:00Z":
                    for tc in data["tool_calls"]:
                        if tc.get("name") == "write_to_file":
                            args = tc.get("args", {})
                            target = args.get("TargetFile", "").strip('"')
                            if target in TARGET_FILES:
                                content = args.get("CodeContent", "")
                                if isinstance(content, str):
                                    if content.startswith('"') and content.endswith('"'):
                                        # Parse JSON string to handle escaped newlines
                                        try:
                                            content = json.loads(content)
                                        except:
                                            pass
                                TARGET_FILES[target] = content
        except Exception as e:
            pass

for filepath, content in TARGET_FILES.items():
    if content:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Restored {filepath}")
    else:
        print(f"Could not find {filepath}")
