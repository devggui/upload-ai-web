import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function ModelSelect() {
  return (
    <Select disabled defaultValue="gpt3.5">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gpt3.5">GTP 3.5-turbo 16k</SelectItem>
      </SelectContent>
    </Select>
  )
}