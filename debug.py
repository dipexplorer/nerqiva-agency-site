import json

with open("/home/dipuser/.gemini/antigravity-ide/brain/2974476e-99f6-4117-895e-0cccdfd7e581/.system_generated/logs/transcript.jsonl", "r") as f:
    for line in f:
        try:
            data = json.loads(line)
            if "tool_calls" in data:
                for tc in data["tool_calls"]:
                    if tc.get("name") == "write_to_file":
                        args = tc.get("args", {})
                        if isinstance(args, str):
                            try:
                                args = json.loads(args)
                            except:
                                pass
                        target = args.get("TargetFile", "")
                        if isinstance(target, str):
                            target = target.strip('"')
                        if target == "/mnt/data2/SIDE_HUSSLE/agency-site/src/app/page.tsx":
                            print(f"Found page.tsx at {data.get('created_at')}")
                            content = args.get("CodeContent", "")
                            if isinstance(content, str):
                                while content.startswith('"') and content.endswith('"'):
                                    try:
                                        content = json.loads(content)
                                    except:
                                        break
                                with open(f"page_{data.get('created_at').replace(':','-')}.txt", "w") as out:
                                    out.write(content)
        except Exception as e:
            pass
