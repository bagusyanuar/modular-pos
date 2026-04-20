# 📚 Components Registry

Base color: **`orange-500`** (Primary). Prefix all components with `G`.

### 🔘 Actions & UI Feedback

- **GTypography**: Semantic text (h1-h6, p, small). Props: `variant`, `weight`, `align`, `color`.
- **GButton**: Multi-variant button + loading + icons (Prefix/Suffix).
- **GToast**: Sonner-based notifications. Use `toast()` to trigger.
- **GPopover**: Radix UI floating menu/positioning.
- **GDialog**: Glassmorphism modal. Components: `Header`, `Footer`, `Title`, `Description`.
- **GBadge**: Status pill (success, error, warning, info).
- **GStatCard**: Premium statistics widget with icons, trends, and animations.
- **GCard**: Compound card component for consistent containers. Headers, Content, Footers.
- **GChart**: Recharts wrapper for premium data visualization with GenPOS gradients.

### 📝 Form Inputs

- **GTextField / GTextarea**: Standard text input/area + error state + icons.
- **GPasswordfield**: Password input + visibility toggle.
- **GCheckbox / GRadio**: Custom styled selection elements.
- **GSelect / GMultiSelect**: react-select wrappers for single/multi choice.
- **GSwitch**: Toggle with `leftLabel` / `rightLabel`.
- **GLabel**: Standard form label with required asterisk support.
- **GFileUpload**: Drag & drop multi-file uploader.

### 📅 Date & Time

- **GCalendar**: Base `react-day-picker` component.
- **GDatePicker / GDateRangePicker**: Integrated with Popover.
- **GTimePicker / GDateTimePicker**: Styled native time selection.

### 📊 Data & Layout

- **GDataTable**: TanStack Table v8. Features: Sort, Paginate, Select, Loading/Empty states.
- **GTabs**: Framer Motion sliding indicator. Compound pattern.
- **GSkeleton**: Pulse placeholders for loading states.

---

> ✨ **Note:** New components MUST be added to `packages/ui` using the **G** prefix and `cn()` utility.
